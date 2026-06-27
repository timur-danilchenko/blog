from fastapi import APIRouter, status

from src.api.schemas.resume import ResumeResponse


router = APIRouter(prefix="/resume")


@router.get(
    path="/summary",
    response_model=ResumeResponse,
    status_code=status.HTTP_200_OK,
)
def resume():
    return ResumeResponse(summary="Hello, World!")
