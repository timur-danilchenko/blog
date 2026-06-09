from fastapi import APIRouter

from app.transport.api.posts import router as posts_router


router = APIRouter()

router.include_router(posts_router)


@router.get("/")
async def health():
    return {"message": "ok"}
