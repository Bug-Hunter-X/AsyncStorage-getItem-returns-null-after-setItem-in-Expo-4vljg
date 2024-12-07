# AsyncStorage getItem returns null after setItem in Expo

This repository demonstrates a common error when using AsyncStorage in Expo applications.  The issue arises from the asynchronous nature of AsyncStorage operations.  The `getItem` method might return `null` if called immediately after `setItem`, before the storage operation completes.

## Problem

The problem is that `AsyncStorage.setItem` is asynchronous, and it doesn't guarantee that the data is available right after the call. Attempting to retrieve the data immediately using `AsyncStorage.getItem` results in `null` being returned because the storage operation hasn't finished yet.

## Solution

The solution is to ensure that you're using the `await` keyword to wait for the `AsyncStorage.setItem` operation to complete before retrieving the data with `AsyncStorage.getItem`.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `expo start` to start the development server.
4. Observe that the app initially logs `null`.