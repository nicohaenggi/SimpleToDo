var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'DOg'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });

  });

  describe('showCompletedReducer', () => {

    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
      res = reducers.showCompletedReducer(true, action);
      expect(res).toEqual(false);
    });

  });


  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'something to do',
          completed: false,
          createdAt: 1299239
        }
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].todo).toEqual(action.todo);
    });

    it('should toggle todo', () => {
      var state = [{
        id: 12,
        text: 'toggle todoos',
        completed: true,
        createdAt: 12,
        completedAt: 129
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 12
      }
      var res = reducers.todosReducer(df(state), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toNotExist();
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 1240
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

  });

});
