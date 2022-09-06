# Type Error
call function , func not declare. When trying to access a property on an undefined

# Syntax Error

notValid(

# ReferenceError
These occur when code refers to a value that does not exit current scope

# Manually throwing errors

function sayName(name) {
  if(typeof name !== 'string') {
    throw new Error('name must be a string, received:' + typeof name);
  }
}

# Intercepting errors using try/catch
try {
  someCrashyFunction()
} catch(error) {
  // Handle the error here:
  // ...
  // then pass it up the chain
  throw error;
}

# Gotta catch ‘em all with global error handling
