import "./Form.css";

export function Form() {
  return (
    <form action="https://formspree.io/f/mwkyaqvr" method="POST">
      <input placeholder="First name" name="Name" />
      <input placeholder="Last Name" name="Name" />
      <input placeholder="E-mail" name="Email" />
      <input placeholder="Phone number" type="number" name="Phone Number" />
      <textarea placeholder="Drop a message" name="Message" />
      <input type="submit" />
    </form>
  );
}
