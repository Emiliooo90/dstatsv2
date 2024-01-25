@ECHO OFF
call venv\Scripts\activate
start python API\run-data-api.py
start python run.py
pause