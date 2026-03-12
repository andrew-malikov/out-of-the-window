%% Erlang sample
-module(sample).
-export([main/0, format_user/1, avg/1]).

-record(user, {id = 0, name = <<>>}).

format_user(#user{id = Id, name = Name}) ->
    io_lib:format("~p:~s", [Id, binary_to_list(Name)]).

avg([]) ->
    0.0;
avg(List) ->
    lists:sum(List) / length(List).

main() ->
    U = #user{id = 1, name = <<"andrew">>},
    io:format("~s~n", [lists:flatten(format_user(U))]),
    io:format("avg=~p~n", [avg([1,2,3,4])]).
