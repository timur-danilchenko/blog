import uuid

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.domain.models.post import Post
from app.transport.schemas.base import PaginatedResponse, PaginationRequest, paginate
from app.transport.schemas.post import CreatePostRequest, PostResponse


router = APIRouter(prefix="/posts")


@router.post(
    path="/",
    response_model=PostResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create(
    post: CreatePostRequest,
    db: Session = Depends(get_db),
):
    db_post = Post(**post.model_dump())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post


@router.get(
    path="/",
    response_model=PaginatedResponse[PostResponse],
    status_code=status.HTTP_200_OK,
)
async def list(
    pagination: PaginationRequest = Depends(),
    db: Session = Depends(get_db),
):
    total = db.query(func.count(Post.id)).scalar()
    posts = db.query(Post).offset(pagination.offset).limit(pagination.size).all()

    return paginate(posts, total, pagination.page, pagination.size)


@router.delete(
    path="/{id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete(
    id: uuid.UUID,
    db: Session = Depends(get_db),
):
    stmt = select(Post).where(Post.id == id)
    post = db.scalars(stmt).first()

    if post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found",
        )

    db.delete(post)
    db.commit()
