import * as mocha from 'mocha';
import { expect } from 'chai';
import { Rezultz, RezultzType } from './index';
 

function testSuccess<T> (input: T): Rezultz<T> {
    return {
        type: RezultzType.Success,
        value: input as T
    }
}

describe("Tests the main functionality.", () => {
    it("Should load correctly", () => {
        let value = `${Math.random()}`
        let rez = testSuccess(value);

        expect(rez.type).to.be.a("number", `rez.type should be a number.`);        
    })
})
