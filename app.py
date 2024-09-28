
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import pickle
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000",  # React frontend
    "http://127.0.0.1:8001",  # FastAPI backend (if accessing directly)
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class QuestionRequest1(BaseModel):
    opposition: str
    format :str 
    innings : str
with open('m.pkl', 'rb') as f:
    gr = pickle.load(f)


def predict(opp,format,inn):
    arr=[0]*20
    l=['Afghanistan', 'Australia', 'Bangladesh', 'England', 'HongKong',
    'Ireland', 'Netherlands', 'NewZealand', 'Pakistan', 'Scotland',
    'SouthAfrica', 'SriLanka', 'U.A.E.', 'WestIndies', 'Zimbabwe', 'odi',
    't20', 'test', '1', '2']
    if (opp in l) and (format in l) and (inn in l):
        print("hi")
        arr[l.index(opp)]=1
        arr[l.index(format)]=1
        arr[l.index(inn)]=1

        return gr.predict([arr])[0]
            
    else:
        return -1
    
@app.post('/predict')
async def ask(req:QuestionRequest1):
    opp=req.opposition
    format=req.format
    inn=req.innings
    res=predict(opp,format,inn)
    #print("he",res)
    return {"result": int(res)}

if __name__== "__main__":
    uvicorn.run(app,host="0.0.0.0")
