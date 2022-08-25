// Better way
class BaseUser {
  constructor(private username: string) {}
}

class RestrictedFreeUser extends BaseUser {
  constructor(username: string) {
    super(username);
  }
}

class PrivilegedPremiumUser extends BaseUser {
  constructor(username: string) {
    super(username);
  }
  skipAd() {
    console.log(`Ad was skipped.`);
  }
}
