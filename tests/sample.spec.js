const {test,expect} = require('@playwright/test')

test('First test', async function({page}){
    expect(1).toBe(1)
    //
})

test.skip('Second test', async function({page}) {
    expect(2).toBe(3)
    //
})

test('Third test', async function({page}) {
    expect("3.0").toContain("3")
    expect(true).toBeTruthy()
    //
})