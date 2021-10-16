const rewire = require("rewire")
const LoginForm = rewire("./LoginForm")
const mapStateToProps = LoginForm.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "user@host:300", password: "NoWiFi4you", error: "Message box: foo; bar\n", loading: "Www.GooGle.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "user1+user2@mycompany.com", password: "!Lov3MyPianoPony", error: "ValueError", loading: "ponicode.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "bed-free@tutanota.de", password: "NoWiFi4you", error: "ValueError", loading: "https://croplands.org/app/a/reset?token=" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "bed-free@tutanota.de", password: "$p3onyycat", error: "invalid choice", loading: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "email@Google.com", password: "YouarenotAllowed2Use", error: "ValueError", loading: "https://api.telegram.org/" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
