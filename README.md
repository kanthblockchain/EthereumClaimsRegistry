#  ERC: Ethereum Claims Registry #780 

## Abstract:

```
This text describes a proposal for an Ethereum Claims Registry (ECR) which allows persons, smart contracts, and machines to issue claims about each other, as well as self issued claims. The registry provides a flexible approach for claims that makes no distinction between different types of Ethereum accounts. The goal of the registry is to provide a central point of reference for on-chain claims on Ethereum.
```

## Specification:

```
The ECR is a contract that is deployed once and can then be commonly used by everyone. Therefore it's important that the code of the registry has been reviewed by lots of people with different use cases in mind. The ECR provides an interface for adding, getting, and removing claims. Claims are issued from an issuer to a subject with a key, which is of type bytes32. The claims data is stored as type bytes32.
```

## Claim Types:

```
The key parameter is used to indicate the type of claim that is being made. There are three ways that are encuraged for use in the ECR:

    - Standardised claim types use syntax borrowed from HTTP and do not start with X-. The key is the hash of the claim type (eg, keccak256('Owner-Address'))
    - Private types not intended for interchange use the same syntax, but with X- prefix. The key is the hash of the claim type (eg, keccak256('X-My-Thing'))
    - Ad-hoc types use 32 random bytes for the key, enabling allocation of new globally used keys without the need for standardisation first.
```

## Registry specification:

<Details>
<Summary>
The ECR provides the following functions:
</Summary>

 - setClaim
    - Used by an issuer to set the claim value with the key about the subject.
    ```js
    function setClaim(address subject, bytes32 key, bytes32 value) public;
    ```

 - setSelfClaim
    - Convenience function for an issuer to set a claim about themself.
      ```js
      function setSelfClaim(bytes32 key, bytes32 value) public;
      ```

  - getClaim
    - Used by anyone to get a specific claim.
    ```js
    function getClaim(address issuer, address subject, bytes32 key) public constant returns(bytes32);
    ```

  - removeClaim
    - Used by an issuer to remove a claim it has made.
      ```js
      function removeClaim(address issuer, address subject, bytes32 key) public;
      ```
</Details>


## ERC specification Reference:

  - https://github.com/ethereum/EIPs/issues/780