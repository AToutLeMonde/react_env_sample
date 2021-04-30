# До сборки

### `package.json`

Указываем сборщику, что все статические файлы следует брать относительно текущей директории
```
"homepage": "./",
```

### `public/envConfig.js`
Файл с инициализацией переменных окружения. Автоматически копируется сборщиком в директорию с остальной статикой. 

```
window.envConfig = {
    title: 'My production app',
    backend_url: 'https://swapi.dev/api/',
    version: '1.00.07'
}
```

### `public/index.html`
Подключаем envConfig.js в index.html в секцию <head>

```
<head>
...
    <script src="%PUBLIC_URL%/envConfig.js"></script>
</head>
```


### `src/config.js`
Создаем файл с объектом envConfig для дальнейшего использования внутри React-приложения. Это удобно, если вдруг нужно будет дополнительно сделать какие-то проверки или выполнить иную инициализацию значений.

```
{
  backend_url: window.envConfig.backend_url,
  title: window.envConfig.title,
  version: window.envConfig.version
}
```

# После сборки
## `npm run install`
## `npm run build`

### `build/envConfig.js`
После сборки содержимое файла envConfig.js может быть также безболезненно заменено при деплое внешним скриптом.
После изменения файла envConfig.js не требуется вносить какие-либо правки в bundle, собранный через WebPack, изменения автоматически подтянутся при загрузки страницы.
