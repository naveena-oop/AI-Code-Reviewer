from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model = genai.GenerativeModel("gemini-1.5-flash")

class CodeRequest(BaseModel):
    code: str
    language: str

@app.post("/review")
async def review_code(request: CodeRequest):
    prompt = f"""Review this {request.language} code. Give feedback on:
1. Bugs or errors
2. Security issues
3. Code quality and best practices
4. Provide a refactored version

Code:
{request.code}"""

    response = model.generate_content(prompt)
    return {"review": response.text}