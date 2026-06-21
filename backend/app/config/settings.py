from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Personal Blog Server"
    database_engine: str
    database_user: str
    database_passwd: str
    database_host: str
    database_port: int
    database_name: str
    database_url: str

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()
