The correct way to use AsyncStorage is to `await` the `setItem` operation before getting the item.  This ensures that the data is available before attempting to access it.

```javascript
// Correct usage
async function storeAndRetrieve() {
  await AsyncStorage.setItem('key', 'value');
  const value = await AsyncStorage.getItem('key');
  console.log(value); // value will be 'value'
}

storeAndRetrieve();
```

Using `async/await` ensures that the code waits for the `setItem` operation to finish before continuing to `getItem`.  This approach guarantees that the data is available and prevents `null` being returned.