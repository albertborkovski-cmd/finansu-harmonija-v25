# Finansų harmonija V25

V25 testavimo versija užšaldyta 2026-11-25 ties šaltinio žyma `v25`. Sukurta iš V24 šaltinių ir papildyta visais dabartiniais V25 pakeitimais. Tolesni vietiniai pakeitimai atliekami tik atskiroje V26. V25 ir ankstesni leidimai nekeičiami be naujo aiškaus prašymo.

V25 testavimo adresas po diegimo: https://albertborkovski-cmd.github.io/finansu-harmonija-v25/.

## Paleidimas

```bash
npm ci
npm run dev
```

V25 vietinis adresas: http://127.0.0.1:5206/. Šaltinio Git istorija laikoma atskirai nuo viešos sukompiliuotų failų saugyklos. Vietiniai duomenys ir prisijungimo raktai nepublikuojami. Aktyvi V26 veikia http://127.0.0.1:5207/.

## Leidimo turinys

Įtraukta visa dabartinė programa: dokumentai ir sąskaitų kūrimas, bankas, kasa, sandėlis, sudengimas, BŽ ir susietų dokumentų redagavimas, OCR darbuotojo / TeamLead eiga ir mokymo taisyklės, administravimas bei lietuvių ir anglų kalbų perjungimas.

V25 GitHub saugykloje pateikiama sukompiliuota svetainė, `source-v25.zip` archyvas, `source-manifest.json` ir `release.json` su SHA-256 bei patikrų rezultatais. Šaltinių archyvas apima programą, bet ne vietines agento instrukcijas ar privačius darbo failus. Vietinė šaltinių Git istorija niekada nepakeičia GitHub artefaktų istorijos.

„Apžvalgos“ sąraše rodomi tik penki svarbiausi pranešimai: pirmiausia „Critical“, tada „Warning“, vienodo svarbumo – naujausi. Bendras aktyvių pranešimų skaičius ir „View all“ išlieka.

## Demonstracinis prisijungimas

- Vidinis administratorius: `albertborkvski@gmail.com`.
- Išorinis naudotojas: `aurika.z@meso.lt`.
- Slaptažodžio laukas prototipe tikrina formatą: bent 6 simboliai, didžioji raidė ir specialus simbolis. Naudokite išgalvotą testinę reikšmę, ne tikrą slaptažodį.

Tai demonstracinis prototipas, ne produkcinė apskaitos sistema. GitHub Pages neturi saugaus serverinio autentifikavimo, bendros duomenų bazės, tikro OCR, banko, apskaitos sistemos ar el. laiškų siuntimo API. Mokėjimai išsaugomi kaip juodraščiai, ne siunčiami į banką. Connect bank išsaugo teikėjo pasirinkimą, tačiau nepradeda banko autorizacijos ir nepakeičia būsenos į Connected. Demonstracinės prijungimo būsenos nėra tikras banko ryšys.

Vietiniai `.env`, `.meso-shared-data.json`, `node_modules` ir kiti privatūs darbo failai nepublikuojami. Nenaudokite konfidencialių dokumentų ar tikrų slaptažodžių. To paties GitHub Pages domeno leidimai gali dalytis naršyklės saugykla; izoliuotam testavimui naudokite atskirą naršyklės profilį.

## Patikros

TypeScript patikra, leidimo kompiliavimas ir tiksliniai dokumentų bei OCR darbo eigos testai tikrinami prieš publikavimą. Pilno testų rinkinio rezultatai ir žinomi senesnių testinių pakaitalų neatitikimai dokumentuojami `release.json`; nesėkmingi testai nelaikomi praėjusiais.
