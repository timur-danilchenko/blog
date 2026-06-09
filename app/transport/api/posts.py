from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.domain.models.post import Post
from app.transport.schemas.post import CreatePost


router = APIRouter(prefix="/posts")


@router.post("/")
async def create(
    post: CreatePost,
    db: Session = Depends(get_db),
):
    db_post = Post(**post.model_dump())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post
