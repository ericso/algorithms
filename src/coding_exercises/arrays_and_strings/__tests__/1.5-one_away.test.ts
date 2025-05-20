import { oneAway } from '../1.5-one_away';

describe('One Away', () => {
    it('should return true for an addition', () => {
        expect(oneAway('pale', 'ple')).toBeTruthy();
    });

    it('should return true for a deletion', () => {
        expect(oneAway('pales', 'pale')).toBeTruthy();
    });

    it('should return true for a substitution', () => {
        expect(oneAway('bale', 'pale')).toBeTruthy();
    });

    it('should return false for multiple operations', () => {
        expect(oneAway('pale', 'bake')).toBeFalsy();
    });

    it('should return false for string length difference greater than 1', () => {
        expect(oneAway('pale', 'palexx')).toBeFalsy();
    });

    it('should return true for identical strings', () => {
        expect(oneAway('pale', 'pale')).toBeTruthy();
    });
});