import os

diretorio = os.path.dirname(os.path.abspath(__file__))

if not os.path.isdir(diretorio):
    print(f"Erro: O diretório '{diretorio}' não foi encontrado.")
else:
    for root, dirs, files in os.walk(diretorio):
        for filename in files:

            if filename.lower().endswith('.html'):
                novo_nome = filename[:-5] + '.php'
                caminho_antigo = os.path.join(root, filename)
                caminho_novo = os.path.join(root, novo_nome)
                try:
                    os.rename(caminho_antigo, caminho_novo)
                    print(f'Renomeado: {caminho_antigo} -> {caminho_novo}')
                except OSError as e:
                    print(f"Erro ao renomear {caminho_antigo} para {caminho_novo}: {e}")
