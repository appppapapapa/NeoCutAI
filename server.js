const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Указываем Node.js раздавать стили, картинки и скрипты из папки проекта
app.use(express.static(__dirname));

// При обращении к сайту отдаем главный index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер успешно запущен на порту ${PORT}`);
});
