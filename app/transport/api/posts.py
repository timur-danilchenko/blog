from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.domain.models.post import Post
from app.transport.schemas.base import PaginatedResponse, PaginationRequest, paginate
from app.transport.schemas.post import CreatePostRequest, PostResponse


router = APIRouter(prefix="/posts")


@router.post(
    path="/",
    response_model=PostResponse,
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
)
async def list(
    pagination: PaginationRequest = Depends(),
    db: Session = Depends(get_db),
):
    total = db.query(func.count(Post.id)).scalar()
    posts = db.query(Post).offset(pagination.offset).limit(pagination.size).all()

    return paginate(posts, total, pagination.page, pagination.size)
