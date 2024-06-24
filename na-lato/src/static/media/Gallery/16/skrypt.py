import os

def generate_import_statements():
    # Pobierz ścieżkę do katalogu, w którym znajduje się skrypt
    current_directory = os.path.dirname(os.path.abspath(__file__))

    # Lista wszystkich plików w bieżącym katalogu
    files = os.listdir(current_directory)

    # Filtrowanie tylko plików .jpg
    jpg_files = [file for file in files if file.lower().endswith('.jpg')]

    # Generowanie kodu importu
    imports = []
    numbers_list = []
    for i, file in enumerate(jpg_files, start=1):
        import_statement = f"import photo{i} from '../static/media/Gallery/16/{file}';"
        imports.append(import_statement)
        numbers_list.append(f"photo{i}")

    # Złączenie wszystkich importów w jeden ciąg znaków
    result = "\n".join(imports)
    return result, numbers_list

if __name__ == "__main__":
    import_statements, numbers = generate_import_statements()
    print(import_statements)
    print("\nNumbers:")
    print("\n".join(numbers))
