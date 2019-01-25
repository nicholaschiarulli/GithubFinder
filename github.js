class Github{
  constructor(){
    this.client_id = '31b5ca34ddc925baa7a8'
    this.client_secret = '5240614edf029ef7ffae56db54c156339c36560a'
    this.repos_count = 10
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)


    const profile = await profileResponse.json()

    const repos = await repoResponse.json()
    return {
        profile,
        repos
    }
  }
}