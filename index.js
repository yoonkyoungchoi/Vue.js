var app = new Vue({
    el: '#app',
    data: {
      todos: [
        { text: 'JavaScript 배우기' },
        { text: 'Vue 배우기' },
        { text: '나만의 포트폴리오 사이트 만들기' }
      ]
    }
  });
app.todos.push({ text : 'New Item'});
