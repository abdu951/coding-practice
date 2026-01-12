from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI()


class Item(BaseModel):
    text: str = None
    is_done: bool = False


items = []


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post('/items')
def create_item(item: Item):
    items.append(item)
    return items
