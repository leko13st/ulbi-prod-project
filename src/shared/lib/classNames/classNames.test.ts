import { classNames } from 'shared/lib/classNames/classNames';

// import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional classes', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });
    test('with mods', () => {
        const expected = 'someClass class1 class2 newStyle';
        expect(
            classNames('someClass', { newStyle: true }, ['class1', 'class2']),
        ).toBe(expected);
    });
});
