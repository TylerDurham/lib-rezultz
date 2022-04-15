import * as mocha from 'mocha';
import { expect } from 'chai';
import { Rezult, RezultType } from './index';
 

function testSuccess<T> (input: T): Rezult<T> {
    return {
        type: RezultType.Success,
        value: input as T
    }
}

describe("Tests the main functionality.", () => {
    it("Should load correctly", () => {
        let value = `${Math.random()}`
        let rez = testSuccess(value);

        expect(rez.type).to.be.a("number", `rez.type should be a number.`)
        
    })
})
