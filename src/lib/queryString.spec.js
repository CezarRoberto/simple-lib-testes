const {queryString} = require('./queryString')

describe('Object to query string', () => {
    it('should create a valid query string when an object is created', () => {
        const obj = {
            name: 'Fabio',
            sobrenome: 'Vendovelli',
            profession: 'developer'
        };

        expect(queryString(obj)).toBe('name=Fabio&sobrenome=Vendovelli&profession=developer');
    });
})