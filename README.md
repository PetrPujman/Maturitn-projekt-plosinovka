![build status](../../actions/workflows/build.yml/badge.svg) ![coverage](./coverage.svg)

# Webová aplikace - hra v prohlížeči

# Úvod

Toto je repozitář pro maturitní práci webovoá aplikace -hra v prohlížeči. Hra byla vytvořena za účelem pobavení. Je jednoduchá a závbavná.

# Funkcionalita

Funkce jsou:

- registrace uživatele
- přihlášení uživatele
- návštěva a možnost zahrání si bez přihlášení
- uložení skóre k přihlášenému uživateli
- tabulka nejlepšího skóre uživatele
- globální tabulka nejlepších výsledků

# Technologie

Hra je tvořena pomocí těchto technologií:

- HTML
- CSS
- JavaScript
- Django(python)

# Instalace

Pro spuštění a instalaci aplikace postupujte podle následujících kroků:

1. Nainstalujte docker: https://www.docker.com/

2. Naklonujte repozitář do vašeho lokálního stroje:
   
   git clone https://github.com/PetrPujman/Maturitn-projekt-plosinovka

3. Přejděte do složky s projektem přes příkazovou řádku:

   cd Maturitn-projekt-plosinovka

4. Použijte příkaz *docker compose build* pro sestavení aplikace
   
5. Spusťte databázové migrace:
   
   *./run.sh migrate*

4. Spusťte Django server:

   *docker compose up*

Po spuštění serveru je aplikace dostupná na portu 8300.

# Použití

Hra je po spuštění plně funkční a můžete si v klidu zahrát.
