export default {
  buttons: {
    save: 'Zapisz',
    exit: 'Zakończ',
    close: 'Zamknij',
    cancel: 'Anuluj',
    next: 'Dalej',
    create: 'Dodaj',
    delete: 'Usuń',
    edit: 'Edytuj',
    show: 'Zobacz',
    more: 'więcej',
    less: 'mniej',
    like_up: 'Podoba mi się',
    like_down: 'Nie podoba mi się',
    rating: 'Ocena'
  },
  tooltips: {
    to_archive: 'Przenieś do archiwum',
    delete: 'Usuń',
    edit: 'Edytuj',
    show: 'Zobacz',
    create: 'Dodaj',
    filters: 'Filtry',
    cancel: 'Anuluj',
    save: 'Zapisz',
    show_photos: 'Pokaż zdjęcia w albumie',
    add_photos: 'Dodaj zdjęcia'
  },
  globals: {
    yes: 'Tak',
    no: 'Nie',
    nav: {
      pp: 'polityka prywatności',
      reg: 'regulamin'
    }
  },
  pages: {
    auth: {
      form: {
        name: 'Imię',
        name_hint: '',
        last_name: 'Nazwisko',
        last_name_hint: '',
        email: 'E-mail',
        email_hint: '',
        password: 'Hasło',
        password_hint: '',
        birthday: 'Data urodzenia',
        birthday_hint: '',
        sex: {
          title: 'Płeć',
          title_hint: '',
          labels: {
            male: 'Mężczyzna',
            female: 'Kobieta'
          }
        },
        country: 'Kraj',
        country_hint: '',
        city: 'Miasto',
        city_hint: '',
        address: 'Adres',
        address_hint: '',
        post_code: 'Kod pocztowy',
        post_code_hint: '',
        contact_phone: 'Numer telefonu',
        contact_phone_hint: ''
      },
      register: {
        title: 'Zarejestruj się',
        info: 'Informujemy iż zakładając konto w serwisie akceptujesz nasz regulamin oraz politykę prywatności'
      },
      login: {
        title: 'Zaloguj się',
      }
    },
    account: {
      create: 'Dodaj',
      edit: 'Zmień dane',
      show: 'Zobacz szczegóły',
      movies: {
        title: 'Filmy',
        table: {
          title: 'Tytuł',
          category: 'Kategoria',
          movie: 'Film',
          status: 'Status',
          created_at: 'Data dodania',
          description: 'Opis',
          c_downloads: 'Pobrań',
          comments: 'Komentarzy',
          ratings: 'Ocen',
          likes: 'Polubień'
        },
        form: {
          title: 'Tytuł',
          title_hint: '',
          category: 'Wybierz kategorię',
          category_hint: '',
          description: 'Krótki opis',
          description_hint: '',
          file: 'Dodaj plik',
          file_hint: '',
          is_comment: 'Czy można komentować?',
          is_comment_hint: '',
          is_rating: 'Czy można oceniać?',
          is_rating_hint: ''
        }
      },
      archive: {
        title: 'Archiwum'
      },
      stories: {
        title: 'Opowiadania',
        table: {
          title: 'Tytuł',
          category: 'Kategoria',
          status: 'Status',
          created_at: 'Data dodania'
        },
        form: {
          title: 'Tytuł',
          title_hint: '',
          category: 'Wybierz kategorię',
          category_hint: '',
          is_comment: 'Czy można komentować?',
          is_comment_hint: '',
          is_rating: 'Czy można oceniać?',
          is_rating_hint: '',
          content: 'Treść',
          content_hint: ''
        }
      },
      photos: {
        title: 'Zdjęcia',
        create: 'Dodaj zdjęcia',
        edit: 'Edytuj',
        form: {
          album: 'Wybierz album',
          album_hint: ''
        },
        albums: {
          title: 'Albumy',
          create: 'Dodaj album',
          edit: 'Edytuj',
          form: {
            name: 'Nazwa',
            name_hint: '',
            is_private: 'Album prywatny?',
            is_private_hint: 'Do zdjęć z albumu prywatnego nie ma dostępu nikt poza Tobą',
            is_visibility: 'Album dla ludzi',
            is_visibility_hint: 'Wybrane zdjęcia z albumu dla ludzi mogą pojawić się w innych miejscach w serwisie nawet u użytkowników którzy nie są na liście Twoich znajomych'
          }
        }
      },
      settings: {
        title: 'Ustawienia',
        pages: {
          basic: 'Dane podstawowe',
          security: 'Bezpieczeństwo',
          avatar: 'Zdjęcie profilowe',
          form: {
            new_email: 'Wpisz nowy adres e-mail',
            new_email_hint: '',
            new_password: 'Wpisz nowe hasło',
            new_password_hint: '',
            old_password: 'Wpisz obecne hasło',
            old_password_hint: '',
            change_email: 'Zmień adres e-mail',
            change_password: 'Zmień hasło',
            avatar: 'Wybierz zdjęcie profilowe'
          }
        }
      }
    }
  },
  notifications: {
    no_data: 'Brak danych do wyświetlenia'
  },
  nav: {
    front: {
      movies: 'Filmy',
      stories: 'Opowiadania',
      photos: 'Zdjęcia',
      terms: 'Regulamin',
      pp: 'Polityka prywatności',
      contact: 'Kontakt',
      help: 'Pomoc'
    },
    account: {
      movies: 'Filmy',
      photos: 'Zdjęcia',
      delete: 'Usunięte',
      archive: 'Archiwum',
      stories: 'Opowiadania',
      cams: 'Kamerki',
      payments: 'Płatności',
      settings: 'Ustawienia',
      help: 'Pomoc',
      create: {
        movie: 'Film',
        photo: 'Zdjęcie',
        story: 'Opowiadanie'
      },
      left: {
        home: 'Strona główna',
        movies: 'Filmy',
        photos: 'Zdjęcie',
        stories: 'Opowiadania',
        settings: 'Usstawienia'
      },
      logout: 'Wyloguj się'
    },
  },
  page: {
    rating: {
      create: 'Dodaj ocenę'
    },
    movie: {
      created_by: 'Dodano przez: ',
      created_in: 'w',
      related: {
        title: 'Filmy w tej samej kategorii'
      }
    },
    story: {
      related: {
        title: 'Opowiadania w tej samej kategorii'
      }
    },
    profile: {
      info: {
        title: 'Informacje',
        name: 'Imię i nazwisko / nick',
        created_at: 'Użytkownik od: ',
        email: 'Adres email',
        birthday: 'Data urodzenia'
      },
      photos: 'Zdjęcia',
      movies: 'Filmy'
    }
  },
  comments: {
    show: 'Wyświetl komentarze',
    list: 'Komentarze',
    buttons: {
      reply_all: 'Wyświetl odpowiedzi',
      reply_create: 'Dodaj odpowiedź'
    },
    form: {
      create: 'Napisz komentarz',
      create_hint: '',
      edit: 'Zmień komentarz',
      edit_hint: '',
      answers: {
        content: 'Dodaj odpowiedź',
        content_hint: ''
      }
    }
  },
  search: {
    movie_title: 'Wpisz tytuł filmu ...',
    title: 'Tytuł',
    category: 'Kategoria',
    ordering: {
      title: 'Sortuj według',
      asc: 'Od najstarszych',
      desc: 'Od najnowszych'
    },
    pagination: 'Wyświetl'
  }

}
