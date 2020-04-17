"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const CdkTest = require("../lib/cdk-test-stack");
test("Empty Stack", () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkTest.CdkTestStack(app, "MyTestStack");
    // THEN
    /*
      expectCDK(stack).to(matchTemplate({
        "Resources": {}
      }, MatchStyle.EXACT))
      */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRlc3QudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNkay10ZXN0LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxxQ0FBcUM7QUFDckMsaURBQWtEO0FBRWxELElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQ3ZCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE9BQU87SUFDUCxNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzNELE9BQU87SUFDUDs7OztRQUlJO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBleHBlY3QgYXMgZXhwZWN0Q0RLLFxuICBtYXRjaFRlbXBsYXRlLFxuICBNYXRjaFN0eWxlLFxufSBmcm9tIFwiQGF3cy1jZGsvYXNzZXJ0XCI7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcbmltcG9ydCBDZGtUZXN0ID0gcmVxdWlyZShcIi4uL2xpYi9jZGstdGVzdC1zdGFja1wiKTtcblxudGVzdChcIkVtcHR5IFN0YWNrXCIsICgpID0+IHtcbiAgY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbiAgLy8gV0hFTlxuICBjb25zdCBzdGFjayA9IG5ldyBDZGtUZXN0LkNka1Rlc3RTdGFjayhhcHAsIFwiTXlUZXN0U3RhY2tcIik7XG4gIC8vIFRIRU5cbiAgLypcbiAgICBleHBlY3RDREsoc3RhY2spLnRvKG1hdGNoVGVtcGxhdGUoe1xuICAgICAgXCJSZXNvdXJjZXNcIjoge31cbiAgICB9LCBNYXRjaFN0eWxlLkVYQUNUKSlcbiAgICAqL1xufSk7XG4iXX0=