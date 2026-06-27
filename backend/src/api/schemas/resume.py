from pydantic import BaseModel


class ResumeResponse(BaseModel):
    summary: str
