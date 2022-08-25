class User {
  constructor(private username: string) {}

  skipAd() {
    console.log(`I'm going to skip if I'm premium`);
  }
}

class FreeUser extends User {
  constructor(username: string) {
    super(username);
  }

  skipAd() {
    return null;
  }
}

class PremiumUser extends User {
  constructor(username: string) {
    super(username);
  }

  skipAd() {
    console.log(`Ad was skipped.`);
  }
}

// The following code will execute
// and print the message
const premium = new PremiumUser(`premium_username`);
premium.skipAd();

// The following code will execute
// but return null
const free = new FreeUser(`free_username`);
free.skipAd();
