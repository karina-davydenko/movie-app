
# <h1 align="center">Movie App</h1>

> Предметная область: приложение для поиска фильмов.
> Использованное API: в приложении используется API <https://kinopoiskapiunofficial.tech>.
> Основной функционал:

1. Регистрация и авторизация: пользователи могут создать учетную запись и авторизоваться в приложении.
2. Поиск фильмов: приложение предоставляет возможность быстрого поиска фильмов по их ключевым словам.
3. Избранные фильмы: пользователи могут добавлять и удалять фильмы в список избранных для удобного доступа к ним в будущем.
4. История поиска: приложение сохраняет историю поиска, что помогает пользователю найти фильм, который они искали ранее.
5. Светлая и темная тема: приложение предоставляет пользователям выбор между светлой и темной темами интерфейса.

## **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности.**
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использовал **Firebase**. Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/app/firebase/firebase.ts)
      **React**
- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [] Есть разделение на **умные и глупые компоненты** Ссылка на код [Глупый компонент]() и [Умный компонент]()
- [x] Есть **рендеринг списков** Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/components/ListCards/ListCards.tsx)
- [x] Реализована хотя бы одна **форма** Использовал [Material UI](https://mui.com/) Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/pages/SignUpPage/SingUpPage.tsx#L35)
- [x] Есть применение **Контекст API** Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/app/context/themeContext.tsx)
- [x] Есть применение **предохранителя** Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/App.tsx#L15)
- [x] Есть хотя бы один **кастомный хук** Ссылка на [код](https://github.com/karina-davydenko/movie-app/tree/main/src/shared/hooks)
- [] Хотя бы несколько компонентов используют **PropTypes** Ссылка на [код]() и [второй]()
- [] Поиск не должен триггерить много запросов к серверу (**debounce**) Ссылка на [код]()
- [x] Есть применение **lazy + Suspense** Ссылка на код [lazy](https://github.com/karina-davydenko/movie-app/blob/main/src/app/router/router.tsx#L9) [Suspense](https://github.com/karina-davydenko/movie-app/blob/main/src/main.tsx#L19)

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit** Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/app/store/store.ts)
- [x] Используем **слайсы** Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/shared/reducers/Firestore/firestoreSlice.ts)
- [] Есть хотя бы одна **кастомная мидлвара** Ссылка на [код]()
- [x] Используется **RTK Query** Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/app/store/api/kinopoiskApi.ts)
- [x] Используется **Transforming Responses** Ссылка на [код](https://github.com/karina-davydenko/movie-app/tree/main/src/app/store/api/transformResponses)

### **2 уровень (необязательный)**

- [x] Использование **TypeScript** Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/app/store/api/transformResponses/types.ts)
- [x] Использование **Firebase** Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/app/firebase/firebase.ts)
- [x] Связь UI и бизнес-логики построена не через команды, а через **события**
      Напрмер ButtonAddFavorites используется как событие а его хендлер как реакция на это событие
      Он не знает только то что его нажали а хендлер уже в хуке обрабатывает это событие
      Ссылка на [код](https://github.com/karina-davydenko/movie-app/blob/main/src/components/Card/Card.tsx#L20)

### **Дополнительно**

- [x] Проект собран при помощи Vite
- [x] Использована React-error-boundery
