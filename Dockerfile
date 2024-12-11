# Use uma imagem Python oficial como base
FROM python:3.10-slim

# Instalar dependências do sistema para o psycopg2 e compilador C
RUN apt-get update && apt-get install -y \
    libpq-dev gcc && \
    apt-get clean

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de requisitos para o container
COPY requirements.txt .

# Atualiza o pip
RUN pip install --upgrade pip

# Instala as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo o código do projeto para o container
COPY . .

# Expõe a porta padrão do Django
EXPOSE 8000

# Comando padrão para executar o servidor de desenvolvimento do Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

