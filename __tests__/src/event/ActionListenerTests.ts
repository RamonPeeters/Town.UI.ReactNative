import ActionListener from "../../../src/event/ActionListener";

it("invokes all listeners in order", () => {
    let value: string = "a";
    let listener: ActionListener = new ActionListener();

    listener.addListener(() => value += "b");
    listener.addListener(() => value += "c");
    listener.invoke();

    expect(value).toBe("abc");
});

it("removes the correct listener", () => {
    let listener: ActionListener = new ActionListener();

    listener.addListener(failingListener);
    listener.removeListener(failingListener);
    listener.invoke();
});


function failingListener(): void {
    fail("This method was listened to.");
}
