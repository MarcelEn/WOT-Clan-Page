module.exports = {
    insertAccessToken: (accountId, accessToken, expiresAt) => {
        return 'INSERT INTO accessTokens (account_id, access_token, expires_at)'
            + 'VALUES (' 
            + accountId + ','
            + '"' + accessToken + '",'
            + expiresAt + ')'       
    }
}