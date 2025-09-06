const books = [
    {
        "title": "100+ Basic Program Python",
        "author": "Python Communicy",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fprogrampython.pdf&client=web&scene=main",
        "cover": "images/pythonprog.jpg"
    },
    {
        "title": "Django Documentation Release 2.2.29.dev20220411083753",
        "author": "Django Software Foundation",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fdjangodev.pdf&client=web&scene=main",
        "cover": "images/djangodev.jpg"
    },
    {
        "title": "Firewall for Dummies 2nd Edition",
        "author": "y Brian Komar, dkk",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Ffirewalldum.pdf&client=web&scene=main",
        "cover": "images/fwdum.jpg"
    },
    {
        "title": "Sistem Administrasi Jaringan Linux - UBUNTU",
        "author": "JUMADI M. PARENRENG, dkk",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fbelajarubuntu.pdf&client=web&scene=main",
        "cover": "images/ubuntu.jpg"
    },
    {
        "title": "Firewalls and Internet Security, Second Edition",
        "author": "William R. Cheswick, dkk",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Ffwinsec.pdf&client=web&scene=main",
        "cover": "images/fwinsec.jpg"
    },
    {
        "title": "Network Security Know It All",
        "author": "James Joshi, dkk",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fnetworksec.pdf&client=web&scene=main",
        "cover": "images/netsecu.jpg"
    },
    {
        "title": "MODUL PRAKTIKUM PEMROGRAMAN BERORIENTASI OBYEK",
        "author": "unknown",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Falgo.pdf&client=web&scene=main",
        "cover": "images/pbo.jpg"
    },
    {
        "title": "Basis Data",
        "author": "Muhammad Fikry",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fbasisdata01.pdf&client=web&scene=main",
        "cover": "images/basisdata.jpg"
    },
    {
        "title": "Basis Data dan Sistem Basis Data",
        "author": "Ruliah dan Andri Suryadi",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fbasisdata02.pdf&client=web&scene=main",
        "cover": "images/program02.jpg"
    },
    {
        "title": "Data Engineering with Python",
        "author": "Paul Crickard",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fdateengine.pdf&client=web&scene=main",
        "cover": "images/dataengine.jpg"
    },
    {
        "title": "The Docker Book",
        "author": "James Turnbull",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fdocker01.pdf&client=web&scene=main",
        "cover": "images/docker01.jpg"
    },
    {
        "title": "Cocker",
        "author": "Hening Titi Ningtyas",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fdocker02.pdf&client=web&scene=main",
        "cover": "images/docker02.jpg"
    },
    {
        "title": "Belajar Bahasa Jepang - Minna no Nihongo 1",
        "author": "CV Lintas Cipta Pustaka",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fmnn01.pdf&client=web&scene=main",
        "cover": "images/mnn02.jpg"
    },
    {
        "title": "Belajar Bahasa Jepang - Minna no Nihongo 2",
        "author": "CV Lintas Cipta Pustaka",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fmnn02.pdf&client=web&scene=main",
        "cover": "images/mnn02.jpg"
    },
    {
        "title": "Belajar Bahasa Jepang - Easy Japanese",
        "author": "Japan Foundation",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fjapanbasic.pdf&client=web&scene=main",
        "cover": "images/ej.jpg"
    },
    {
        "title": "The Python Handbook",
        "author": "Flavio Copes",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fpython04.pdf&client=web&scene=main",
        "cover": "images/TPH.jpg"
    },
    {
        "title": "ASIC & INTERMEDIATE TIPS AND TRICKS",
        "author": "Benjamin Bennett Alexander",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fpython03.pdf&client=web&scene=main",
        "cover": "images/python02.jpg"
    },
    {
        "title": "Algoritma & Struktur Data dengan Python 3",
        "author": "Khoirudin",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fpython02.pdf&client=web&scene=main=main",
        "cover": "images/python03.jpg"
    },
    {
        "title": "Teori & Implementasi Pemrograman C#",
        "author": "Asrianda",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fpemrograman01.pdf&client=web&scene=main",
        "cover": "images/csharp.jpg"
    },
    {
        "title": "Python in Practice",
        "author": "Developer's Library",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fpython01.pdf&client=web&scene=main",
        "cover": "images/python04.jpg"
    },
    {
        "title": "Modul Teori Jaringan Komputer",
        "author": "Universitas AMIKOM Yogyakarta",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fmodul01.pdf&client=web&scene=main",
        "cover": "images/jarkom.jpg"
    },
    {
        "title": "Pemrograman Java untuk Pemula",
        "author": "Budi Hardono",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fjava.pdf&client=web&scene=main",
        "cover": "images/java.jpg"
    },
    {
        "title": "Keamanan siber – Pedoman untuk keamanan Internet",
        "author": "Rancangan Standar Nasional Indonesia 3",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fiso27001.pdf&client=web&scene=main",
        "cover": "images/cyber.jpg"
    },
    {
        "title": "Beginning Ethical Hacking with Python",
        "author": "Sanjib Sinha",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fethicalhacking.pdf&client=web&scene=main",
        "cover": "images/hack.jpg"
    },
    {
        "title": "Docker #1 : Pengenalan, Intalasi dan Penggunaan Dasar",
        "author": "Indonesia Open University",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fdocker03.pdf&client=web&scene=main",
        "cover": "images/docker03.jpg"
    },
    {
        "title": "The Black Cat’s Letter and Other Stories",
        "author": "tudents of English Literature 2018",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Fnovel01.pdf&client=web&scene=main",
        "cover": "images/thebackcats.jpg"
    },
    {
        "title": "Falsafah Hidup",
        "author": "HAMKA",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Ffilsafathidup.pdf&client=web&scene=main",
        "cover": "images/fh.jpg"
    },
    {
        "title": "Pengantar Filsafat Ilmu",
        "author": "Suaedi",
        "file": "https://dm.terabox.com/pfile/docview?path=%2Fbuku%2Ffilsafat%20ilmu.pdf&client=web&scene=main",
        "cover": "images/FI.jpg"
    }

];