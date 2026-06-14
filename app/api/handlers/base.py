from fastapi import APIRouter

from app.api.handlers.posts import router as posts_router


router = APIRouter(prefix="/api")

router.include_router(posts_router)


@router.get("/")
async def health():
    return {"message": "ok"}
