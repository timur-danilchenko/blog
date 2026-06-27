from fastapi import APIRouter

from app.api.handlers.info import router as info_router
from app.api.handlers.posts import router as posts_router


router = APIRouter(prefix="/api")

router.include_router(posts_router)
router.include_router(info_router)


@router.get("/")
async def health():
    return {"message": "ok"}
