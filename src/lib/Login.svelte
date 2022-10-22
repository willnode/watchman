<script>
    import { auth as uiauth } from "firebaseui";
    import { EmailAuthProvider, getAuth } from "firebase/auth";
    import { onMount } from "svelte";
    import { auth } from "../store";

    onMount(() => {
        var ui = new uiauth.AuthUI(auth);
        ui.start("#firebaseui-auth-container", {
            callbacks: {
                signInSuccessWithAuthResult: function (
                    authResult,
                    redirectUrl
                ) {
                    if (authResult.user) {
                        localStorage.setItem('user', JSON.stringify(authResult.user))
                        location.href = '/';
                    }
                    return false;
                },
                uiShown: function () {
                    console.log("firebase login loaded");
                },
            },
            signInOptions: [EmailAuthProvider.PROVIDER_ID],
            // Other config options...
        });
    });
</script>

<div id="firebaseui-auth-container" />
