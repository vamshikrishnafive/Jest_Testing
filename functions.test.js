const functions = require('./functions');
test('Add 2 + 2 to equal to 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2  to nOt equal to 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('should be turly', () => {
    expect(functions.checkValue(2)).not.toBeFalsy();
});

test('should be equal to vamshi krishna obj', () => {
    expect(functions.createUser()).toEqual({
        firstName: "vamshi",
        lastName: "krishna"
    })
});

test('should be to equal to 1000', () => {
    const load1 = 500;
    const load2 = 500;
    expect(load1 + load2).toBeGreaterThan(800);
    expect(load1 + load2).toBeGreaterThanOrEqual(1000);
    expect(load1 + load2).toBeLessThan(1100);
    expect(load1 + load2).toBeLessThanOrEqual(1000);
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
}); 

test('Result should have user as 1', () => {
    resss'/
})e////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////d   