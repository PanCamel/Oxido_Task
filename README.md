# Konwerter artykułów do HTML za pomocą OpenAI GPT-4 🇵🇱

Ten projekt automatyzuje proces konwersji tekstowych artykułów na dobrze sformatowany HTML z wykorzystaniem API GPT-4 od OpenAI. Skrypt odczytuje artykuł, formatuje go zgodnie z określonymi zasadami i integruje zawartość z szablonem HTML.

---

## Funkcje

- Konwersja artykułów tekstowych do dobrze sformatowanego HTML.
- Automatyczne dobieranie odpowiednich tagów HTML do struktury treści.
- Dodawanie miejsc na obrazy oraz ich podpisy w artykule.
- Integracja sformatowanej treści z dostosowanym szablonem HTML.

---

## Struktura projektu
```
├── index.mjs          # Głowny skrypt do generowania HTML
├── utils.js           # Funkcje pomocnicze, do analizowania artykułu i zapisu plików
├── resources/
│   ├── artykul.txt    # Input (artykuł do przekonwertowania)
│   ├── szablon.html   # Szablon gotowego podglądu
├── output/
│   ├── artykul.html   # Wygenerowany artykuł
│   ├── podglad.html   # Finalny podgląd artykułu
```

---

## Wymagania

1. **Node.js** (wersja 14 lub nowsza)
2. **Klucz API OpenAI**: 

---

## Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/PanCamel/Oxido_Task.git
   cd Oxido_Task

2. Zainstaluj zależności:
    ```bash
    npm install
    ```
3. Skonfiguruj środowisko:

   **Windows**:
   W terminalu wykonaj:
     ```bash
     #Stałe ustawienie zmiennej środowiskowej:
     setx OPENAI_API_KEY "your_api_key_here"
     
     #Tymczasowe ustawienie zmiennej środowiskowej:
     set OPENAI_API_KEY "your_api_key_here"
     ```
   W przypadku wybrania setx uruchom ponownie terminal/środowisko, aby zmiany zostały wprowadzone
   
   **MacOs i Linux**:
   W terminalu wykonaj:
     ```bash
     #Stałe ustawienie:
     echo 'export OPENAI_API_KEY="your_api_key_here"' >> ~/.bashrc
     # Dla Zsh:
     echo 'export OPENAI_API_KEY="your_api_key_here"' >> ~/.zshrc

     #Tymczasowe ustawienie:
     export OPENAI_API_KEY="your_api_key_here"
     ```
---

## Użycie
Umieść tekst artykułu w pliku ./resources/artykul.txt.

Jeśli potrzebujesz, dostosuj plik szablon.html w folderze resources. Upewnij się, że zawiera placeholder ```<!-- {{content}} -->```, gdzie zostanie wstawiona wygenerowana treść.

Uruchom skrypt:

```bash
node index.mjs
```

Wyniki zostaną zapisane w katalogu output:

- artykul.html: Surowa treść HTML dla artykułu.
- podglad.html: Pełny podgląd z treścią osadzoną w szablonie.

## Obsługa błędów
W przypadku błędów podczas odczytu plików, komunikacji z API OpenAI lub zapisu plików, szczegóły zostaną zapisane w konsoli.

# Article to HTML Converter using OpenAI GPT-4 🇬🇧

This project automates the process of converting textual articles into well-formatted HTML using the GPT-4 API from OpenAI. The script reads the article, formats it according to specified guidelines, and integrates the content into an HTML template.

---

## Features

- Converts textual articles into well-formatted HTML.
- Automatically selects appropriate HTML tags for the content structure.
- Adds placeholders for images and their captions in the article.
- Integrates formatted content with a custom HTML template.

---

## Project Structure
```
├── index.mjs          # Głowny skrypt do generowania HTML
├── utils.js           # Funkcje pomocnicze, do analizowania artykułu i zapisu plików
├── resources/
│   ├── artykul.txt    # Input (artykuł do przekonwertowania)
│   ├── szablon.html   # Szablon gotowego podglądu
├── output/
│   ├── artykul.html   # Wygenerowany artykuł
│   ├── podglad.html   # Finalny podgląd artykułu
```

---

## Requirements

1. **Node.js** (version 14 or higher)
2. **OpenAI API Key**: 

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PanCamel/Oxido_Task.git
   cd Oxido_Task
2. Install dependencies:
    ```bash
   npm install
    ```
3. Set up the environment:
   **Windows**
   ```bash
   #Set the environment variable permanently:
   setx OPENAI_API_KEY "your_api_key_here"
     
   #Set the environment variable temporarily:
   set OPENAI_API_KEY "your_api_key_here"
   ```
   If you use setx, restart the terminal/environment for the changes to take effect.

   **MacOs/Linux**
   ```bash
   #Set the environment variable permanently (in the shell configuration file):
   echo 'export OPENAI_API_KEY="your_api_key_here"' >> ~/.bashrc
   # For Zsh:
   echo 'export OPENAI_API_KEY="your_api_key_here"' >> ~/.zshrc

   #Set the environment variable temporarily:
   export OPENAI_API_KEY="your_api_key_here"
   ```

## Usage
Place the article text in the file ./resources/artykul.txt.

If needed, adjust the template file szablon.html in the resources folder. Make sure it contains the placeholder ```<!-- {{content}} -->```, where the generated content will be inserted.

Run the script:

```bash
node index.mjs
```
The results will be saved in the output directory:

-artykul.html: Raw HTML content for the article.
-podglad.html: Full preview with the content embedded in the template.

## Error Handling
In case of errors while reading files, communicating with the OpenAI API, or saving files, details will be logged to the console.



   
   

  

