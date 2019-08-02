const chai = require("chai");
const expect = chai.expect; // or should, that are useful for sinon

const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);



describe("#1: smoke test (with chai's expect)", function() {
    it("checks equality", function() {
        expect(true).to.be.true;
    });
});


// https://sinonjs.org/releases/latest/spies/
describe("#2: sinon's spies", function() {
    describe("#2.1: hello", function () {
        function hello(name, cb) {
            cb("hello " + name);
        }

        it("should call callback with correct greeting", function () {
            const cb = sinon.spy();

            hello("foo", cb);

            expect(cb).to.have.been.calledWith("hello foo");
        });
    });

    describe("#2.2: Spying on an object", function() {
        let car;

        //the beforeEach setup function will be called with each run of the suite
        beforeEach(function() {
            car = {
                go: function(value) {
                    let speed = value;
                }
            };

            sinon.spy(car, 'go'); //creates the spy

            car.go(50);
            car.go(80);

            // car.go.restore(); // restore original fn after spies flew
        });

        //This test will succeed
        it("should call the go function", function() {
            expect(car.go).to.have.been.called;
        });

        //This test will fail- the go function is called twice
        it("should call the go function twice", function() {
            const calls = car.go.getCalls();
            expect(calls.length).to.be.equals(2);
        });
    });



    /*
    NB:
        No fetch method here 'cause no emulation for Sinon here
        Instead XMLHttpRequest object is emulated by Sinon

        For using fake fetch see: https://github.com/msn0/fake-fetch
        For mocking fetch requests see: http://www.wheresrhys.co.uk/fetch-mock/
    */
    function myxhr(url, done) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === XMLHttpRequest.DONE){
                let error = false;
                let response = false;
                if (request.status === 200){
                    response = request.responseText;
                } else {
                    error = new Error('Something failed');
                }
                done(error, response);
            }
        };
        request.open('GET', url);
        request.send();
    }

    describe("#2.3: Fake server example", function() {
        let server;
        before(function() {
            server = sinon.fakeServer.create();
        });
        after(function() {
            server.restore();
        });

        function getCustomer(custId, callback) {
            // Node-style CPS: callback(err, data)
            // Example of using: callback(null, data);
            myxhr('/customer/' + custId, callback);
        }

        it("should call callback with deserialized data", function() {
            let callbackCalls;
            const callback = sinon.spy();

            callbackCalls = callback.getCalls();
            expect(callbackCalls.length).to.be.equals(0);

            getCustomer(5, callback);

            expect(server.requests[0].url).to.be.equals('/customer/5');

            // This is part of the FakeXMLHttpRequest API
            server.requests[0].respond(
                200, {
                    "Content-Type": "application/json"
                },
                JSON.stringify([{
                    id: 5,
                    FirstName: "Bob",
                    LastName: "Dobbs"
                }])
            );

            callbackCalls = callback.getCalls();
            expect(callbackCalls.length).to.be.equals(1);
            expect(callbackCalls[0].args[0]).to.be.equals(false);
            expect(callbackCalls[0].args[1]).to.be.equals('[{"id":5,"FirstName":"Bob","LastName":"Dobbs"}]');
        });
    });
});


// https://sinonjs.org/releases/latest/stubs/
// describe("#3: Stub's Examples", function () {
//     it('should ', function () {
//
//     });
// });


// https://sinonjs.org/releases/latest/fakes/
// describe("#4: Fake's Examples", function () {
//     it('should ', function () {
//
//     });
// });

