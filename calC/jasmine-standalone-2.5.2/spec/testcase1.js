describe("test suite for calc operation", function () {
    it("should write the calculated result in fieldset", function () {
        
        var str = "A";
        var result = calc(str);
        expect(5).toBe(result);
    })
})