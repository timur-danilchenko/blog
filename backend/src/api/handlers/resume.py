from fastapi import APIRouter, status

from src.api.schemas.resume import ResumeResponse


router = APIRouter(prefix="/resume")


@router.get(
    path="/summary",
    response_model=ResumeResponse,
    status_code=status.HTTP_200_OK,
)
def resume():
    summary = """
        Hello, my name is Timur, but every one calls me Tim.
        I'm Software Developer with 3 years of experience in industry.
        Primarily works on backend using Python as main programming language,
        marginally works on frontend using TypeScript.
        Familliar with using Django, FastAPI, React.
    """

    return ResumeResponse(summary=summary)
