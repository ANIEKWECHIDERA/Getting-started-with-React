function Message() {
  const name = 'Chidera';
  if (name) {
    return <h1>Hello {name}</h1>;
  } else {
    return <h1>Hello Sir</h1>;
  }
}

export default Message;
