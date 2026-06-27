from fastapi import APIRouter

from src.api.handlers.posts import router as posts_router
from src.api.handlers.resume import router as resume_router


router = APIRouter(prefix="/api")

router.include_router(posts_router)
router.include_router(resume_router)


@router.get("/")
async def health():
    return {"message": "ok"}
