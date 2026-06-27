from fastapi import APIRouter, status

from app.api.schemas.info import ResumeResponse


router = APIRouter(prefix="/info")


@router.get(
    path="/summary",
    response_model=ResumeResponse,
    status_code=status.HTTP_200_OK,
)
def resume():
    return ResumeResponse(summary="Hello, World!")
