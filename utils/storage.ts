export async function saveString(key: string, value: string) {
  try {
    await localStorage.setItem(key, value);
  } catch (e) {}
}

export async function loadString(key: string) {
  try {
    const value = await localStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
}

export async function saveObject(key: string, value: Object) {
  const jsonValue = JSON.stringify(value);
  return saveString(key, jsonValue);
}

export async function loadObject(key: string) {
  try {
    const jsonValue = await loadString(key);
    if (!jsonValue) {
      return null;
    }
    const objectValue = JSON.parse(jsonValue);
    return objectValue;
  } catch (err) {}
  return null;
}

export async function remove(key: string) {
  try {
    await localStorage.removeItem(key);
  } catch (e) {}
}

export async function hasKey(key: string) {
  try {
    const result = await loadString(key);
    return Boolean(result);
  } catch (e) {}
  return false;
}

export async function wipeAllKeys() {
    try {
        await localStorage.clear();
    } catch (e) { }
}